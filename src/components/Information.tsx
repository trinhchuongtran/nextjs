import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Image, Button } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

import img1 from '../img/img1.svg';
import img2 from '../img/img2.svg';

const infor = [
    {
        order_xs: [1, 2],
        order_md: [1, 2],
        title: "Chúng tôi hoạt động như thế nào",
        subtitle: "Tiếp nhận ứng viên tài năng",
        content: "Bạn muốn kiếm tiền bằng giọng nói của chính mình, Hay bạn muốn đưa giọng nói mình có tầm ảnh hưởng và truyền cảm hứng đến mọi người. Hãy tham gia nộp hồ sơ ngay.",
        btn_content: "Nộp hồ sơ ngay",
        img: img1.src
    },
    {
        order_xs: [1, 2],
        order_md: [2, 1],
        title: "Chúng tôi hoạt động như thế nào",
        subtitle: "Cung cấp giọng đọc cho khách có nhu cầu",
        content: "Bạn cần giọng đọc miền bắc, miền trung, miền nam giọng nào chúng tôi cũng có. Chúng tôi luôn đề xuất giọng đọc tốt nhất, phù hợp nhất cho bạn khi bạn có nhu cầu",
        btn_content: "Thuê voicer ngay",
        img: img2.src
    }
]

const Information = () => (
    <Row>
        {infor.map((information) => (
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
                                xs={{ span: 18 }} md={{ span: 18 }}
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
                                className="card_content"
                                span={18}
                            >
                                <Row>
                                    <Col span={18}
                                        style={{ marginBottom: "16px" }}
                                    >
                                        <Title
                                            className="card_content_title"
                                        >{information.title}</Title>
                                        <Title
                                            className="card_content_subtitle"
                                        >{information.subtitle}</Title>
                                    </Col>
                                    <Col span={24}>
                                        <Text
                                            className="card_content_content"
                                        >
                                            {information.content}
                                        </Text>
                                    </Col>
                                    <Col span={10}
                                        style={{ marginTop: "32px" }}
                                    >
                                        <Button type="primary"
                                            className="card_content_btn"
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

export default Information;
