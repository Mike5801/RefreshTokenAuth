import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import useUsers from '../../hooks/useUsers'
import Card from '../../components/Card'
import DataGrid from '../../components/DataGrid/DataGrid'

type Props = {}

const HomePage = (props: Props) => {
  
  const user = useAppSelector((state) => state.auth.user)
  const users = useUsers()
  
  return (
    <div className='box-border w-full h-full flex flex-col gap-8 justify-between px-12 py-10 overflow-hidden' >
      <h1 className='text-4xl text-white'>Welcome back, { user }</h1>
      <div className='w-full h-full flex justify-between gap-12 overflow-hidden'>
        <div className='h-full w-1/3'>
          <Card />
        </div>
        <div className='w-full h-full '>
          <DataGrid users={ users }/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
