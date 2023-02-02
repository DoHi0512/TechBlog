import dynamic from "next/dynamic";
import { IdType } from "../../type/id";
import * as S from "./style";

const content = `
## 문제
[문제 링크](https://www.acmicpc.net/problem/4781)

## 접근법
- 정해진 예산 안에서 최대한의 칼로리를 얻을 수 있도록 사탕을 사는 문제여서 간단한 Knapsack문제라고 생각했다.

- 사탕의 개수에 대한 제한이 없으므로 Unbounded Knapsack이라고 생각했다.

- 사탕의 가격이 소수 둘째자리까지 주어져서 100을 곱해서 double -> int로 바꾸어서 풀면 되겠다고 생각했다.

### 1. 채점
![](https://velog.velcdn.com/images/dohi/post/dd823219-372b-47e6-b096-8c2dbe698e15/image.png)
- 로직 자체는 쉬운 문제라 코드를 짜는 과정에서 실수가 있었거나 double -> int로 바꾸는 과정에서 오류가 발생했을거라고 생각했다.

### 2. 문제 해결
double을 int로 바꾸는 과정에서 발생한 오류가 맞았다.
- 0.29같은 몇몇 수들은 100을 곱하면 29가 아닌 28.999999... 이런식으로 계산된다고 한다.
- 2진수 체계로 10진수 소수점을 표현하는 방식에서 나오는 오류라고 한다(rounding error 라고 함)

### 3. 해결법
100을 곱한뒤 0.5를 더해주면 해결되는 문제였다.
- 0.5를 더하는 이유는 rounding error가 발생한 숫자에 0.5를 더해주면 올림이 발생하여 정수 부분이 +1되고 정상적으로 곱셈이 된 숫자여도 0.5를 더한다고 정수 부분의 변화가 일어나지 않기 때문이다.

--- 

## 결과
![](https://velog.velcdn.com/images/dohi/post/803961e6-7173-4706-83aa-01fc5a5b615a/image.png)

---
`;

const PostViewer = dynamic(() => import("../../components/PostViewer"), {
  ssr: false,
});
export default function DetailPage({ id }: IdType) {
  return (
    <S.Layout>
      <S.Content>
        <S.Title>setState 비동기 반영</S.Title>
        <S.Info>
          <S.Author>DoHi</S.Author>·<S.Date>5일 전</S.Date>
        </S.Info>
        <PostViewer content={content} />
      </S.Content>
    </S.Layout>
  );
}
