import bookImg from '../../assets/images/book.png'
import profileImg from '../../assets/images/profileImg.jpg'

const feedSamples = [
  {
    category: '교육',
    title: '생활코딩! React 리액트 프로그래밍',
    nickname: '초코',
    date: '2023-07-25',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '교육',
    title: '실전! 스프링 부트와 리액트로 시작하는 모던 웹 애플리케이션 개발',
    nickname: '바나나',
    date: '2024-01-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '교육',
    title: '전! 스프링 부트와 리액트로 시작하는 모던 웹 애플리케이션 개발 ',
    nickname: '딸기우유',
    date: '2024-02-07',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '교육',
    title: '프로 리액트',
    nickname: '안녕하세요',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '자기계발',
    title: '취업과 이직을 위한 프로그래머스 코딩 테스트 문제 풀이 전략 : 자바 편',
    nickname: '호이쨔아아아',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '자기계발',
    title: '나는 나의 스무 살을 가장 존중한다',
    nickname: '언제나함께라면',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '자기계발',
    title: '세이노의 가르침',
    nickname: '프로바이오유산균',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '자기계발',
    title: '데일 카네기 자기관리론(국내최초 초판 무삭제 완역본)',
    nickname: '프론트백엔드개발자',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '교육',
    title: '2024 이기적 정보처리기사 실기 핵심 600제 + 프로그래밍 언어',
    nickname: '굿모닝우유와함께한잔',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '교육',
    title: 'GPT-4, ChatGPT, 라마인덱스, 랭체인을 활용한 인공지능 프로그래밍',
    nickname: '아메리카노헤이즐넛맛추',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '교육',
    title: '멀티플레이어 게임 프로그래밍',
    nickname: '가나다라마바사아자차카타',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터와 아즈카반의 죄수 (미나리마 에디션)',
    nickname: '가나다라마바사아자차카타파',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터 : 마법사의 돌 (양장)',
    nickname: '가나다라마바사아자차카타파하닉네임',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '추리',
    title: '블랙 쇼맨과 운명의 바퀴',
    nickname: 'huma',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '추리',
    title: '금단의 마술',
    nickname: 'pumkin',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '추리',
    title: '눈에 갇힌 외딴 산장에서',
    nickname: 'gugu',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터 : 마법사의 돌 (양장)',
    nickname: 'banana',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터 : 마법사의 돌 (양장)',
    nickname: '하2루',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터 : 마법사의 돌 (양장)',
    nickname: '4U',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터 : 마법사의 돌 (양장)',
    nickname: '가나다라마바사아자차카타파하닉네임',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터 : 마법사의 돌 (양장)',
    nickname: '가나다라마바사아자차카타파하닉네임',
    date: '2022-05-09',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터 : 마법사의 돌 (양장)',
    nickname: '가나다라마바사아자차카타파하닉네임',
    date: '2023-01-10',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
  {
    category: '소설',
    title: '해리 포터 : 마법사의 돌 (양장)',
    nickname: '끝2',
    date: '2022-04-15',
    oneLine: '한 줄 평이 여기에 표시됩니다. 한 줄 평이 여기에 표시됩니다.',
  },
]

const duplicationCount = 100 // 복사할 횟수
const originalLength = feedSamples.length // feed 항목 개수
const extendedLength = originalLength * duplicationCount // 늘릴 배열 길이 계산

const extendedFeedSamples = new Array(extendedLength)

// id, highlight, review 항목을 추가하고 자동 증가
for (let i = 0; i < extendedLength; i++) {
  const originalIndex = i % originalLength
  extendedFeedSamples[i] = {
    ...feedSamples[originalIndex],
    id: i + 1,
    bookImg: bookImg,
    author: '나카네쓰아키지음, 황미숙 옮김',
    publisher: '민음사',
    profileImg: profileImg,
    like: 0,
    highlight: [
      { page: 287, content: '좋은 사회에서 나온 척도라도 모든 사회 발전을 이끌 수는 없다. 이것 또는 저것을 아주 택할 게 아니라, 사안에 따라 이것과 저것을 두루 택해야 한다.' },
      { page: 287, content: '좋은 사회에서 나온 척도라도 모든 사회 발전을 이끌 수는 없다. 이것 또는 저것을 아주 택할 게 아니라, 사안에 따라 이것과 저것을 두루 택해야 한다.' },
      { page: 287, content: '좋은 사회에서 나온 척도라도 모든 사회 발전을 이끌 수는 없다. 이것 또는 저것을 아주 택할 게 아니라, 사안에 따라 이것과 저것을 두루 택해야 한다.' },
    ],
    review:
      '서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자이내서평은1000자',
  }
}

export default extendedFeedSamples
