import React, {Component} from 'react';

class Posts extends Component {
    renderData=()=>{
        return this.props.post.map(data=>{
            return (
                <tr key={data.id}>
                    <td>{data.userId}</td>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>

                </tr>
            )
        })

    }

    render(){
        return(
                <div className="m-5">
                    <table className="table table-striped">
                        <thead className="table-dark">
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.renderData()}
                        </tbody>
                    </table>
                </div>

        )
    }

}

export default  Posts;