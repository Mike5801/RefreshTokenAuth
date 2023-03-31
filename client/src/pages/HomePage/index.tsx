import { useAppSelector } from '../../hooks'

type Props = {}

const HomePage = (props: Props) => {
  const user = useAppSelector((state) => state.auth.user)
  const occupation = useAppSelector((state) => state.auth.occupation)
  const picture = useAppSelector((state) => state.auth.picture)
  const birthDate = useAppSelector((state) => state.auth.picture)

  return (
    <div>
      <h1 className='text-xl font-bold'>Welcome back, { user }</h1>
    </div>
  )
}

export default HomePage