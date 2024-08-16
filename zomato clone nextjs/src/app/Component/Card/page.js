import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../globals.css";

function HeaderCard() {
    return (
        <div className="container">
            <div className="container-fluid headercard h-auto">
                <div className="row d-flex justify-content-between ">
                    <div className="col-6 d-flex mt-5 cardclassss ">
                        <Card style={{ width: '99%' }}>
                            <Card.Img variant="top" className='h-50' src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" />
                            <Card.Body>
                                <Card.Title className='fs-2'>Order Online</Card.Title>
                                <Card.Text className='fs-2'>
                                    Stay home and order your doorstep
                                </Card.Text>
                                <Button variant="primary">Order Online</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6 g-1 d-flex mt-5 cardclassss  justify-content-around ">
                        <Card style={{ width: '99%' }}>
                            <Card.Img variant="top" className='h-50' src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" />
                            <Card.Body>
                                <Card.Title className='fs-2'>Dining</Card.Title>
                                <Card.Text className='fs-2'>
                                    View the city's favourite dining venues
                                </Card.Text>
                                <Button variant="primary">Dining</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default HeaderCard;