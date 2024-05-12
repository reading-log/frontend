import { css } from '@emotion/react'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Doughnut } from 'react-chartjs-2'
import { useGetBookStats } from '../apis/bookAnalysisApi'
import { Layout } from '../components/Layouts'
import { LoadingIndicator } from '../elements/Loading'
import Modal from '../elements/Modal'
import { body2, colors } from '../styles/theme'
import { IStatsData, TModal } from '../types/stats'
const ReadingLogChart = () => {
  const [month, setMonth] = useState(new Date())
  const { data, isLoading } = useGetBookStats(month.getMonth() + 1)
  const bookStats: IStatsData = data?.data

  /**모달 열기 닫기 */
  const [modalOpen, setIsModalOpen] = useState<TModal>({
    isOpen: false,
    data: [],
    date: '',
  })

  ChartJS.register(ArcElement, Tooltip, Legend)
  ChartJS.register(ChartDataLabels)

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },

      datalabels: {
        color: ['#ffffff', '#ffffff', '#5A6A5D', '#ffffff', '#5A6A5D'],
        font: {
          size: 12,
          weight: 600,
        },
        formatter: (value: number, context: Context) => {
          const idx = context.dataIndex // 각 데이터 인덱스'값'을 가져옴
          return bookStats?.bookCountGroupByCategory.map(category => category.category)[idx] + '\n' + +value + '권' // 라벨 + 데이터
        },
      },
    },
  }

  const chartData = {
    labels: bookStats?.bookCountGroupByCategory.map(category => category.category) || [],
    datasets: [
      {
        label: '읽은 권 수',
        data: bookStats?.bookCountGroupByCategory.map(category => category.count) || [],
        backgroundColor: ['#C3A082', '#E9C3B0', '#DBE7DD', '#5A6A5D', '#DBD1C5'],
        borderWidth: 0,
      },
    ],
  }

  /**달력의 날짜 고르기 */
  const handleBookDay = (value: Date) => {
    const year = value.getFullYear()
    const month = String(value.getMonth() + 1).padStart(2, '0') // 월을 두 자리 숫자로 만듭니다.
    const date = String(value.getDate()).padStart(2, '0') // 일도 두 자리 숫자로 만듭니다.

    const formattedDate = `${year}-${month}-${date}` // yyyy-mm-dd 형식으로 변환

    const filteredArray = bookStats.bookCalendarList.filter(item => {
      const dateString = item.createdAt.split('T')[0]
      return dateString === formattedDate
    })
    setIsModalOpen({ isOpen: true, data: filteredArray, date: formattedDate })
  }

  const handlePrevMonth = () => {
    setMonth(prevMonth => {
      const newMonth = new Date(prevMonth)
      newMonth.setMonth(prevMonth.getMonth() - 1)
      return newMonth
    })
  }

  const handleNextMonth = () => {
    setMonth(prevMonth => {
      const newMonth = new Date(prevMonth)
      newMonth.setMonth(prevMonth.getMonth() + 1)
      return newMonth
    })
  }

  return (
    <Layout isFooter>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div css={chartContainer}>
          <div className="chartHeader">
            <FontAwesomeIcon icon={faCaretLeft} size="2x" onClick={handlePrevMonth} />
            <div className="chartTitle">
              <h1>{`${month.getMonth() + 1}월 리딩 분석`}</h1>
              <p>지난 달 보다 {bookStats?.lastMonthTotalBookCount}권 더 읽었어요!</p>
            </div>
            <FontAwesomeIcon icon={faCaretRight} size="2x" onClick={handleNextMonth} />
          </div>
          <div className="boxContainer">
            <div className="countBox">
              <div className="boxLayout count">
                <p>
                  이번 달 <br />
                  읽은 권 수
                </p>
                <span>{bookStats?.thisMonthTotalBookCount}</span>
              </div>
              <div className="boxLayout count">
                <p>
                  이번 달에 받은 <br /> 좋아요 수
                </p>
                <span>{bookStats?.thisMonthLikeCount}</span>
              </div>
            </div>
            <div className="calendarBox">
              <Calendar className="calendar" onClickDay={handleBookDay} showNavigation={false} value={month} />
            </div>
            {bookStats?.bookCountGroupByCategory.length > 0 ? (
              <div className="boxLayout chartBox">
                분야별 통계
                <div className="chartFlex">
                  <Doughnut options={chartOptions} data={chartData} />
                </div>
              </div>
            ) : (
              <div className="boxLayout chartBox">
                <p>분석할 데이터가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      )}
      {modalOpen.isOpen && <Modal modalOpen={modalOpen} onClose={() => setIsModalOpen({ isOpen: false, data: [], date: '' })} />}
    </Layout>
  )
}

export default ReadingLogChart

const chartContainer = css`
  height: calc(100vh - 3.5rem);
  padding: 0.5rem 1rem 2rem;
  ${body2};
  overflow-y: auto;

  .calendar {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .calendarBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chartHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
    color: ${colors.main1};
  }

  .chartTitle {
    text-align: center;
    padding-top: 2.4rem;
    h1 {
      font-weight: 700;
      font-size: 1.6rem;
    }
    p {
      margin-top: 0.8rem;
      color: ${colors.black};
    }
  }

  .countBox {
    margin-top: 2rem;
    display: flex;
    gap: 0.7rem;
    flex-direction: row;
  }

  .count {
    padding: 1.2rem 0.8rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 50%;

    span {
      font-weight: 700;
      font-size: 2.2rem;
    }
  }

  .boxContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .boxLayout {
    border: 1px solid ${colors.boxStroke};
    border-radius: 0.5rem;
    background-color: ${colors.boxFill};
  }

  .chartBox {
    padding: 1rem;
    .chartFlex {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
