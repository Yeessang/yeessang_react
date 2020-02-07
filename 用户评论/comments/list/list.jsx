import '../../baseJs/react.development'
import '../../baseJs/react-dom.development'
import '../../baseJs/babel.min'
import Item from '../item/item'

export default class List extends React.Component {
    render() {
        return (
            <div className="col-md-8 col-lg-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: "none"}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    <Item />
                </ul>
            </div>
        )
    }
}
