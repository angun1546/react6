import { Card } from './component/Card'
import { Button } from './component/Button'
import { Title } from './component/Title'
export function App() {
    return (<><Card>
        <Title title="회원님 안녕하세요" text="비회원이세요?" />
        <Button>회원가입</Button></Card>
        <Card><h2>안녕하세요!</h2>
            <Button color="#205335">프로필설정</Button>
        </Card></>)
}