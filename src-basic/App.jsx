import { Card } from "./component/Card";
import { Button } from "./component/Button";
import { Title } from "./component/Title";
export default function App() {
  return (
    <>
      <Card>
        <Title title="회원님안녕하세요" text="비회원이세요?" />
        <Button>회원가입</Button>
      </Card>
      <Card>
        javascript+react compiler
        <Title title="비회원" text="프로필설정페이지에요">
          <Button>클릭</Button>
        </Title>
        <Button color="#205351">프로필설정</Button>
      </Card>
      <Title title="" text="프로필설정페이지에요">
        <Button>다음섹션이동</Button>
      </Title>
    </>
  );
}
