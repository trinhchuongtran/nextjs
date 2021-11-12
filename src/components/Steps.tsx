import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Image, Button } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

import img3 from '../img/img3.svg';
import img4 from '../img/img4.svg';

const step = [
    {
        order_xs: [1, 2],
        order_md: [1, 2],
        title: "Voicer làm việc như thế nào",
        subtitle: "Bước 1: Tiếp nhận thông tin bao gồm tài liệu yêu cầu từ khách hàng",
        content: "Việc nhận thông tin đầu vào ngay từ lúc đầu sẽ giúp voicer hình thành được ý tưởng cũng như cách triển khai giọng nói, nhấn nhá, cách điệu sao cho đúng với yêu cầu của khách hàng ngay từ đầu, nhằm giảm thiểu sai sót trong quá trình thực hiện dự án. ",
        btn_content: "Tìm hiểu thêm",
        img: img3.src
    },
    {
        order_xs: [1, 2],
        order_md: [2, 1],
        title: "Voicer làm việc như thế nào",
        subtitle: "Bước 2: Tiến hành thu âm sau khi khách hàng đặt dịch vụ",
        content: "Voicer sẽ thu âm nhiều lần cho đến khi hoàn thành đúng yêu cầu của khách hàng, tuỳ theo thời gian đưa ra, voicer sẽ cố gắng hoàn thiện nhanh chóng dự án nhưng cũng đảm bảo thu âm hoàn thiện để bàn giao cho khách hàng",
        btn_content: "Tìm hiểu thêm",
        img: img4.src
    }
]

const Steps = () => (
    <Row
        className="steps"
    >
        {step.map((information) => (
            <Col span={24}
                style={{ margin: "25px 0" }}
            >
                <Row>
                    <Col
                        xs={{ span: 24, order: information.order_xs[1] }} md={{ span: 12, order: information.order_md[0] }} span={12} style={{ width: "100%" }}
                    >
                        <Row
                            justify="space-around" align="middle"
                            style={{ height: "100%" }}
                        >
                            <Col
                                xs={{ span: 20 }} md={{ span: 18 }}
                            >
                                <Image
                                    preview={false}
                                    className="img"
                                    width="100%"
                                    src={information.img}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ span: 24, order: information.order_xs[0] }} md={{ span: 12, order: information.order_md[1] }} span={12}>
                        <Row
                            justify="space-around" align="middle"
                            style={{ minHeight: "100%" }}
                        >
                            <Col
                                span={18}
                                style={{
                                    padding: "24px 0 48px 0",
                                    display: 'inline-flex', justifyContent: 'center', alignItems: 'center'
                                }}
                            >
                                <Row>
                                    <Col span={24}
                                        style={{ marginBottom: "16px" }}
                                    >
                                        <Title
                                            className="card_content_title2"
                                        >{information.title}</Title>
                                        <Title
                                            className="card_content_subtitle2"
                                        >{information.subtitle}</Title>
                                    </Col>
                                    <Col span={24}>
                                        <Text
                                            className="card_content_content2"
                                        >
                                            {information.content}
                                        </Text>
                                    </Col>
                                    <Col span={10}
                                        style={{ marginTop: "32px" }}
                                    >
                                        <Button type="primary"
                                            className="card_content_btn2"
                                            block
                                        >
                                            {information.btn_content}
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        ))}
    </Row>
);

export default Steps;
