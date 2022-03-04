class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "div",
        null,
        "Hello, ",
        this.props.name
      );
    }
  }
  
  ReactDOM.render(React.createElement(HelloMessage, { name: "Sara" }), document.getElementById('hello-example'));

  class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return React.createElement(
        'div',
        null,
        'Seconds: ',
        this.state.seconds
      );
    }
  }
  
  ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));

  class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "TODO"
        ),
        React.createElement(TodoList, { items: this.state.items }),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "label",
            { htmlFor: "new-todo" },
            "What needs to be done?"
          ),
          React.createElement("input", {
            id: "new-todo",
            onChange: this.handleChange,
            value: this.state.text
          }),
          React.createElement(
            "button",
            null,
            "Add #",
            this.state.items.length + 1
          )
        )
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return React.createElement(
        "ul",
        null,
        this.props.items.map(item => React.createElement(
          "li",
          { key: item.id },
          item.text
        ))
      );
    }
  }
  
  ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('todos-example'));


  class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.md = new Remarkable();
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: 'Hello, **world**!' };
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    getRawMarkup() {
      return { __html: this.md.render(this.state.value) };
    }
  
    render() {
      return React.createElement(
        "div",
        { className: "MarkdownEditor" },
        React.createElement(
          "h3",
          null,
          "Input"
        ),
        React.createElement(
          "label",
          { htmlFor: "markdown-content" },
          "Enter some markdown"
        ),
        React.createElement("textarea", {
          id: "markdown-content",
          onChange: this.handleChange,
          defaultValue: this.state.value
        }),
        React.createElement(
          "h3",
          null,
          "Output"
        ),
        React.createElement("div", {
          className: "content",
          dangerouslySetInnerHTML: this.getRawMarkup()
        })
      );
    }
  }
  
  ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('markdown-example'));