import { DefaultLayout } from '../components/Layouts'

interface IErrorFallBackProps {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallBack = ({ error, resetErrorBoundary }: IErrorFallBackProps) => {
  //eslint-disable-next-line
  console.log('error', error)

  return (
    <DefaultLayout>
      <div>에러가 발생했습니다.</div>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </DefaultLayout>
  )
}

export default ErrorFallBack
