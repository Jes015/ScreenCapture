export const recordingStatusType = {
  on: 'on',
  off: 'off',
  paused: 'paused',
  resumed: 'resumed'
} as const

export type RecordingStatus = typeof recordingStatusType[keyof typeof recordingStatusType]
