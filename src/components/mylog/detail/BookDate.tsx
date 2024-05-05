import { css } from '@emotion/react'
import { faBookBookmark, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { usePostBookRecordDate } from '../../../apis/myLogApi'
import { body2, body3, colors } from '../../../styles/theme'
import { IBookDate } from '../../../types/book'

const BookDate = ({ bookRecordDate = [], bookId }: IBookDate) => {
  const [recordDate, setRecordDate] = useState({
    date: '',
    isAdd: false,
  })

  /**날짜 입력 버튼 */
  const handleAddDate = () => {
    setRecordDate(prev => ({ date: '', isAdd: !prev.isAdd }))
  }

  /**날짜 입력 */
  const handleInputDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecordDate(prev => ({ ...prev, date: e.target.value }))
  }

  const postBookRecordDate = usePostBookRecordDate()

  /**날짜 등록 */
  const handleAddRecordDate = () => {
    if (!recordDate.date) alert('유효한 날짜를 입력해주세요.')

    const unixTimestamp = recordDate.date // 밀리초 단위 유닉스 타임스탬프
    const isoStringDate = new Date(unixTimestamp).toISOString()

    postBookRecordDate.mutate(
      {
        bookId,
        data: {
          startDate: isoStringDate,
          endDate: isoStringDate,
        },
      },
      {
        onSuccess: () => {
          setRecordDate({ date: '', isAdd: false })
        },
      },
    )
  }

  return (
    <div css={recordDateBox}>
      <div className="bookMark">
        <FontAwesomeIcon icon={faBookBookmark} color={colors.main1} />
        기록
      </div>
      <div className="dateList">
        <div className="dateBox" onClick={handleAddDate}>
          {recordDate.isAdd ? '취소' : <FontAwesomeIcon icon={faPlus} color={colors.main1} size="sm" />}
        </div>
        {recordDate.isAdd && (
          <div className="dateAdd">
            <input type="date" onChange={handleInputDate} />
            <div className="btn" onClick={handleAddRecordDate}>
              등록
            </div>
          </div>
        )}
        {bookRecordDate?.map(date => (
          <div className="dateBox" key={date.recordId}>
            {date.endDate?.split('T')[0]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookDate

const recordDateBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 2.5rem;

  .bookMark {
    ${body2};
    display: flex;
    gap: 0.5rem;
    margin-right: 1.5rem;
    white-space: nowrap;
  }

  .dateList {
    display: flex;
    gap: 0.5rem;
    white-space: nowrap;
    overflow-x: auto; /* 가로 스크롤 추가 */
    flex-wrap: nowrap;
  }

  .dateBox {
    ${body3};
    border: 2px solid ${colors.innerBoxStroke};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  .dateAdd {
    display: flex;
    align-items: center;
    ${body3};
    border: 2px solid ${colors.innerBoxStroke};
    border-radius: 0.5rem;
    padding: 0 0.5rem;

    input {
      width: 7rem;
      height: 1rem;
      padding: 0rem;
      border: 1px solid ${colors.boxStroke};
      border-radius: 0.3rem;
      ${body3};
    }

    .btn {
      margin-left: 0.5rem;
    }
  }
`
