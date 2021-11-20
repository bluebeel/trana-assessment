import { useRouter } from 'next/router'

const ChapterPage = () => {
  const router = useRouter()
  const { chapter } = router.query

  return <h1>Chapter: {chapter}</h1>
}

export default ChapterPage