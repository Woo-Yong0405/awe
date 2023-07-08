import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div>
        {loggedIn ? (
          <p>축하드립니다. 성공하셔서 달토끼가 빡쳤네요 @dallr.abbit한테 디엠으로 "안녕"을 보내주신다면 달토끼가 다음 레벨로 가는 길을 알려드릴지도 모르겠네요.</p>
         ) : (
          <>
            <h1>퍼즐 레벨 1:</h1>
            <label htmlFor="birthday">내 생일:</label>
            <select id="birthday">
              <option value="wrong">3월 27일</option>
              <option value="wrong">5월 4일</option>
              <option value="right">4월 5일</option>
              <option value="wrong">6월 25일</option>
            </select>
            <label htmlFor="jadegift">원우 생일때 내가 사준 옷의 브랜드:</label>
            <select id="jadegift">
              <option value="wrong">Nike</option>
              <option value="wrong">Hermes</option>
              <option value="wrong">Tommy Hilfiger</option>
              <option value="right">Lifeworks</option>
            </select>
            <label htmlFor="device">7학년 때 내가 썼던 맥북의 색:</label>
            <select id="device">
              <option value="wrong">흰색</option>
              <option value="right">짙은 회색</option>
              <option value="wrong">핑크색</option>
              <option value="wrong">초록색</option>
            </select>
            <label htmlFor="poem1">여름이 막 끝나갈때 보았던 작고 귀여운 _가 있다:</label>
            <select id="poem1">
              <option value="right">새</option>
              <option value="wrong">개</option>
              <option value="wrong">소</option>
              <option value="wrong">쥐</option>
            </select>
            <label htmlFor="poem2">사람들이 눈물을 흘리듯 나뭇잎이 __으로 변하고:</label>
            <select id="poem2">
              <option value="wrong">낙엽</option>
              <option value="right">갈색</option>
              <option value="wrong">나무</option>
              <option value="wrong">뿌리</option>
            </select>
            <label htmlFor="malaysia">내가 말레이시아에서 있었던 기간:</label>
            <select id="malaysia">
              <option value="wrong">3개월</option>
              <option value="wrong">132년</option>
              <option value="right">3년 반</option>
              <option value="wrong">5년</option>
            </select>
            <label htmlFor="gobaek">0630=0314 라면 0602=____:</label>
            <select id="gobaek">
              <option value="wrong">0286</option>
              <option value="right">0705</option>
              <option value="wrong">0813</option>
              <option value="wrong">0315</option>
            </select>
            <label htmlFor="cape">미스터케이프의 별명이 아닌것:</label>
            <select id="cape">
              <option value="wrong">제러미 티철</option>
              <option value="wrong">넛 랫</option>
              <option value="right">레미제라블</option>
              <option value="wrong">망토쌤</option>
            </select>
            <label htmlFor="artist">내 최애 가수:</label>
            <select id="artist">
              <option value="wrong">BTS</option>
              <option value="wrong">Bruno Mars</option>
              <option value="wrong">Mr. Kenny</option>
              <option value="right">Boywithuke</option>
            </select>
            <label htmlFor="mcafirst">MCA에서의 내 첫날:</label>
            <select id="mcafirst">
              <option value="right">7학년 첫날</option>
              <option value="wrong">8학년 첫날</option>
              <option value="wrong">7학년 2학기 첫날</option>
              <option value="wrong">21년 써머캠프 첫날</option>
            </select>
            <button onClick={()=>{
              let asdf = 0
              const array = [(document.getElementById("birthday") as HTMLInputElement)?.value, (document.getElementById("jadegift") as HTMLInputElement)?.value, (document.getElementById("device") as HTMLInputElement)?.value, (document.getElementById("poem1") as HTMLInputElement)?.value, (document.getElementById("poem2") as HTMLInputElement)?.value, (document.getElementById("malaysia") as HTMLInputElement)?.value, (document.getElementById("gobaek") as HTMLInputElement)?.value, (document.getElementById("cape") as HTMLInputElement)?.value, (document.getElementById("artist") as HTMLInputElement)?.value, (document.getElementById("mcafirst") as HTMLInputElement)?.value];
              array.forEach((value, index) => {
                if (array[index] == "wrong") {
                  asdf = asdf + 1;
                }
              }, [])
              if (asdf == 0) {
                setLoggedIn(true)
              } else {
                alert(`${asdf}개가 틀렸습니다.`)
              }
            }}>도전</button>
          </>
        )
      }
      </div>
    </>
  )
}
