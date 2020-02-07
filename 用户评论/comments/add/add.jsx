import '../../baseJs/react.development'
import '../../baseJs/react-dom.development'
import '../../baseJs/babel.min'

export default class Add extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-lg-4">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">用户名</label>
                        <input type="text" className="form-control" placeholder="请输入您的用户名" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">评论</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-md active">Submit</button>
                </form>
            </div>
        )
    }
}
