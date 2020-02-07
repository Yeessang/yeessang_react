import '../../baseJs/react.development'
import '../../baseJs/react-dom.development'
import '../../baseJs/babel.min'


export default class Item extends Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#" className="btn btn-primary btn-sm active" role="button">删除</a>
                </div>
                <p className="user"><span>xxx</span><span>说:</span></p>
                <p className="comment-content">React不错!</p>
            </li>
        )
    }
}
