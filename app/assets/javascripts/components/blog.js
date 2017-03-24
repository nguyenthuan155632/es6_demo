class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false
		};
	}

	handleToggle(e) {
    e.preventDefault();
    return this.setState({
      edit: !this.state.edit
    });
  }

  handleEdit(e) {
    var data;
    e.preventDefault();
    data = {
      name: this.refs.name.value,
      title: this.refs.title.value,
      content: this.refs.content.value
    };
    return $.ajax({
      method: 'PUT',
      url: "/blogs/" + this.props.blog.id,
      dataType: 'JSON',
      data: {
        blog: data
      },
      success: (function(_this) {
        return function(data) {
          _this.setState({
            edit: false
          });
          return _this.props.handleEditBlog(_this.props.blog, data);
        };
      })(this)
    });
  }

  handleDelete(e) {
    e.preventDefault();
    return $.ajax({
      method: 'DELETE',
      url: "/blogs/" + this.props.blog.id,
      dataType: 'JSON',
      success: (function(_this) {
        return function() {
          return _this.props.handleDeleteBlog(_this.props.blog);
        };
      })(this)
    });
  }

  recordRow() {
    return React.DOM.tr(null, React.DOM.td(null, this.props.blog.name), React.DOM.td(null, this.props.blog.title), React.DOM.td(null, this.props.blog.content), React.DOM.td(null, React.DOM.a({
      className: 'btn btn-default',
      onClick: this.handleToggle.bind(this)
    }, 'Edit'), React.DOM.a({
      className: 'btn btn-danger',
      onClick: this.handleDelete.bind(this)
    }, 'Delete')));
  }

  recordForm() {
    return React.DOM.tr(null, React.DOM.td(null, React.DOM.input({
      className: 'form-control',
      type: 'text',
      defaultValue: this.props.blog.name,
      ref: 'name'
    })), React.DOM.td(null, React.DOM.input({
      className: 'form-control',
      type: 'text',
      defaultValue: this.props.blog.title,
      ref: 'title'
    })), React.DOM.td(null, React.DOM.input({
      className: 'form-control',
      type: 'text',
      defaultValue: this.props.blog.content,
      ref: 'content'
    })), React.DOM.td(null, React.DOM.a({
      className: 'btn btn-default',
      onClick: this.handleEdit.bind(this)
    }, 'Update'), React.DOM.a({
      className: 'btn btn-danger',
      onClick: this.handleToggle.bind(this)
    }, 'Cancel')));
  }

	render() {
		if (this.state.edit) {
      return this.recordForm();
    } else {
      return this.recordRow();
    }
	}
}