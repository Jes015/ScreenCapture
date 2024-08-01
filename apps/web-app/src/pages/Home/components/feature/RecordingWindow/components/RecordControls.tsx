import { Button } from '@/components/ui'
import { recordingStatusType } from '../models'
import { useRecorderContext } from '../services/context'

export const RecordControls = () => {
  const { recordingStatus, toggleRecordingStatus } = useRecorderContext()

  const handleOnClickToStartRecording = () => {
    void toggleRecordingStatus(recordingStatusType.on)
  }

  const handleOnClickToStopRecording = () => {
    void toggleRecordingStatus(recordingStatusType.off)
  }

  const handleOnClickToResumeRecording = () => {
    void toggleRecordingStatus(recordingStatusType.resumed)
  }

  const handleOnClickToPauseRecording = () => {
    void toggleRecordingStatus(recordingStatusType.paused)
  }

  const disablePauseResumeButton = recordingStatus === recordingStatusType.off

  return (
    <footer
      className="flex gap-1 text-[0.77rem]"
    >

      {
        (recordingStatus === recordingStatusType.on || recordingStatus === recordingStatusType.resumed || recordingStatus === recordingStatusType.off) && (
          <Button
            onClick={handleOnClickToPauseRecording}
            disabled={disablePauseResumeButton}
          >
            Pause
          </Button>
        )
      }
      {
        recordingStatus === recordingStatusType.paused && (
          <Button
            onClick={handleOnClickToResumeRecording}
            disabled={disablePauseResumeButton}
          >
            Resume
          </Button>
        )
      }
      {
        recordingStatus === recordingStatusType.off && (
          <Button
            onClick={handleOnClickToStartRecording}
            className=" flex-grow"
          >
            Start
          </Button>
        )
      }
      {
        (recordingStatus !== recordingStatusType.off) && (
          <Button
            onClick={handleOnClickToStopRecording}
            className='flex-grow'
          >
            Stop
          </Button>
        )
      }
    </footer>
  )
}
