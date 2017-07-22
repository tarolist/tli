# 링크  
방문했냐 안했냐
## first child  
of 타입은 등장에 관심이 있다.
### 부정셀렉터
셀렉터에 해당하지 않는 모든 요소를 선택한다.
## 키워드
잘못된 키워드를 입력하면 무시한다. 그줄을
## CSS 속성
키워드 , 크기단위 , 색깔 크게 3가지로 나뉜다.
## PX
디스플레이별로 픽셀의 크기가 달라지기 시작했다.  
하지만 절대 값이라  대부분의 브라우저는 1px을 1/96 인치의 절대단위로 인식한다.  
---
 body {  
      text-align: center;   <------상속 속성>  
   }
---

- %  
%는 백분률 단위의 상대 단위이다.   
요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 설정한다.
- em
요소가 지정된 사이즈에 배수를 계산한다.  
 중첩된 요소에 em을 썼을 때
- viewport
1VW=1/100 이라 퍼센트 개념이랑 비슷

### CSS 파트 4,5,8,9 중요 11 모던앱에 적절 13에서 복습

### 요소의 영역은 마진까지

- 요소의 영역 블럭레벨요소와 인라인요소가 있다.

- 기본적인 박스모델 width-부모의 100% , height- 컨텐츠의 피트된다.

# 기본기에 충실하자!!!!!!!

****

- width와 height 프로퍼티를 비롯한 모든 박스모델 관련 프로퍼티(margin, padding, border, box-sizing 등)는 상속되지 않는다.

margin : 40px; 마진 네방향 동시에 먹는다.   
```
4개의 값을 지정할 때
margin: 25px 50px 75px 100px;
margin-top: 25px;
margin-right: 50px;
margin-bottom: 75px;
margin-left: 100px;
3개의 값을 지정할 때
margin: 25px 50px 75px;
margin-top: 25px;
margin-right: 50px; margin-left: 50px;
margin-bottom: 75px
2개의 값을 지정할 때
margin: 25px 50px;
margin-top: 25px; margin-bottom: 25px;
margin-right: 50px; margin-left: 50px;
1개의 값을 지정할 때
margin: 25px;
margin-top: 25px; margin-right: 25px; margin-bottom: 25px; margin-left: 25px;
```

### max-width // min-width
  -max-width 프로퍼티를 사용하면 브라우저 너비가 요소의 너비보다 좁아질 때 자동으로 요소의 너비가 줄어든다.  

### border
border 프로퍼티는 border-width, border-style, border-color를 한번에 설정하기 위한 shorthand 프로퍼티이다.

## display 프로퍼티
-none	해당 요소를 화면에 표시하지 않는다 (공간조차 사라진다) html상에 있더라도  
로그인 할때 한글이 들어 오면 한글입력하지마시오. js와 같이 썼을 때  
display 프로퍼티는 상속되지 않는다.

## 1.1 block 레벨 요소
```
항상 새로운 라인에서 시작한다.
화면 크기 전체의 가로폭을 차지한다. (width: 100%)
width, height, margin, padding 프로퍼티 지정이 가능하다.
block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다
block 레벨 요소 예
```
## 1.2 inline 레벨 요소
- 개행해서 시작하지 않는다.


### 폰트 개념
- 컴퓨터에 깔린 폰트만 사용할 수 있다.
- 브라우저 쓰는 기본폰트가 있다.

##  font-family   
- 프로퍼티 기본적으로 3개 까는게 좋다.
 
## line-height 프로퍼티
 - 텍스트의 높이를 지정한다. 텍스트 수직 정렬에도 응용되어 사용된다.