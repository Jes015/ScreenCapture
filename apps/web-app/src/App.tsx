import { MainLayout } from '@/layouts'
import { Suspense, lazy } from 'react'
import { CWindowType } from './models'
import { useWindowSystemStore } from './services/store/zustand'

const RecordingWindow = lazy(async () => import('@/components/feature/RecordingWindow/RecordingWindow'))
const WatchRecordingWindow = lazy(async () => import('@/components/feature/WatchRecordingWindow/WatchRecordingWindow'))
const DownloadRecordingWindow = lazy(async () => import('@/components/feature/DownloadRecordingWindow/DownloadRecordingWindow'))
const AuthWindow = lazy(async () => import('@/components/feature/AuthWindow/AuthWindow'))

const windowComponents = {
  [CWindowType.record]: RecordingWindow,
  [CWindowType.watchRecord]: WatchRecordingWindow,
  [CWindowType.downloadRecord]: DownloadRecordingWindow
} as const

function App () {
  const { windows } = useWindowSystemStore((state) => ({ windows: state.windows, addWindow: state.addWindow }))

  return (
    <MainLayout>
      <div
        className='h-full flex flex-col justify-center items-center z-50'
      >
        <Suspense>
          {
            windows.map(windowData => {
              const WindowComponent = windowComponents[windowData.type]

              // @ts-expect-error we need to type this better to avoid to use a ts-expect
              return <WindowComponent key={windowData.id} {...{ windowData }} />
            })
          }
          <AuthWindow windowData={{ id: crypto.randomUUID(), name: 'Sign in', type: CWindowType.record, oneOnly: true }} />
        </Suspense>
      </div>
    </MainLayout>
  )
}

export default App
