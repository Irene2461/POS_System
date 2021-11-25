import { Route } from "react-router";


export default function MenuTemplate(props) {
    return (
      <Route path={props.path} exact render={(propsRoute) => {
          return (
            <div>
              <props.component {...propsRoute} />
            </div>
          );
        }}
      />
    );
  }