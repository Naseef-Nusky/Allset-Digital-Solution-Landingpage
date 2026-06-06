import { announcementText } from '../data/content'

export default function AnnouncementBar() {
  return (
    <div className="bg-emerald-500 px-4 py-2.5 text-center text-sm font-medium text-white">
      {announcementText}
    </div>
  )
}
