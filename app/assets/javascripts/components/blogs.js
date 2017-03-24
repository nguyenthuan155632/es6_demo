class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: this.props.data
    };
  }

  updateBlog(blog, data) {
    var index, blogs;
    index = this.state.blogs.indexOf(blog);
    blogs = React.addons.update(this.state.blogs, {
      $splice: [
        [index, 1, data]
      ]
    });
    return this.setState({
      blogs: blogs
    });
  }

  deleteBlog(blog) {
    var index, blogs;
    index = this.state.blogs.indexOf(blog);
    blogs = React.addons.update(this.state.blogs, {
      $splice: [
        [index, 1]
      ]
    });
    return this.setState({
      blogs: blogs
    });
  }

  render() {
    var blog;
    return React.DOM.table({
        className: 'table'
      }, React.DOM.thead({
        className: 'thead-inverse'
      }, React.DOM.tr(null, React.DOM.th(null, 'Name'), React.DOM.th(null, 'Title'), React.DOM.th(null, 'Content'))),
      React.DOM.tbody(null, (function() {
        var i, len, ref, results;
        ref = this.state.blogs;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          blog = ref[i];
          results.push(React.createElement(Blog, {
            key: blog.id,
            blog: blog,
            handleDeleteBlog: this.deleteBlog,
            handleEditBlog: this.updateBlog.bind(this)
          }));
        }
        return results;
      }).call(this)));
  }
}

Blogs.propTypes = {

}

Blogs.defaultProps = {
  blogs: []
}