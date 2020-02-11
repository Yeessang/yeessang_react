import React, { Component } from 'react'
import { Form, Icon, Input, Button,List, Card} from 'antd';
import './person.css'
class Person extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log(values)
            this.props.addPerson(values)
          }
        });
      };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className='addPerson'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('title', {
                            rules: [{ required: true, message: '' }],
                            })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="姓名"
                            />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('describe', {
                            rules: [{ required: true, message: '' }],
                            })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="user"
                                placeholder="输入描述"
                            />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                添加
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={this.props.personArr}
                    renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>{item.describe}</Card>
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Form.create()(Person);
