# css
## Transform
transform : 엘리먼트 크기, 비틀기, 회전 등 포토샵에서 가능했던 작업들을 코드화한 기능
- 2차원, 3차원이 있다
- 여러 속성을 쓰고 싶으면 한 줄에 이어서 쓴다
- transform-origin : 중심축을 중앙이 아닌 곳으로 변경하고 transform한다
* 여러가지 transform library를 활용해보는 것도 좋다.
--------------------------------------------
## Position
엘리먼트의 위치를 정하는 속성 position 속성값 4가지
1. static(기본값) : 움직이지 않고 정적인 상태
2. relative : 부모 엘리먼트를 기준으로 상대적으로 움직인다
3. absolute : position값이 relative인 부모를 기준으로(없다면 웹페이지의 가장 가장자리 기준) 움직인다.
* 자식의 위치값이 absolute이면 부모와의 관계가 끊기고 그래서 자신의 크기가 딱 컨텐츠만 해진다.
그리고 값을 아예 없애면 원래 위치로 돌아간다.
4. fixed : 스크롤을 움직여도 지정된 위치에 고정된다.
* absolute와 마찬가지로 부모와의 관계가 끊기고 크기는 자신의 컨텐츠만 해진다.
---------------------------------
## Inheritance 
상속 : 부모 엘리먼트의 속성을 자식 엘리먼트들도 물려 받는 것
- 일괄적으로 어떤 속성을 적용할 때 일일이 자식들에 속성을 적용하는 것보다 부모 엘리먼트 하나에 적용시키는
것이 더 효율적이다.
- 상속되는 속성이 있고 안 되는 속성이 있음.
-----------------------------------
## Cascading
cascading style sheet  = css
우선순위와 질서는 정하는 것이 필요하다. 

웹브라우저/사용자/저자
언젠가는 사용자가 원하는대로 볼수있지않을까?

style 속성 > Id 셀렉터 > class 셀렉터 > 태그셀렉터 
li포괄적, 그다음 클래스, 더 정교한 선택자는 id 선택자...그리고 스타일이라는 속성이 좀더 태그와 더 가깝다.더 구체적이고 명시적.

## Float 
- Float는 편집 디자인에서 *이미지를 삽화*로 삽입할 때 사용하는 기법입니다.  
   또한 *레이아웃을 잡을 때*도 사용하는 기능이기 때문에 꽤 중요합니다. 
- Float프로퍼티를 사용하지 않은 블록 요소들은 수직으로 정렬된다. `float:left; `프로퍼티를 사용하면 왼쪽부터 정렬되고, `float:right;` 프로퍼티를 사용하면 오른쪽부터 정렬된다.