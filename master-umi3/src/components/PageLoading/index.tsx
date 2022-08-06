import { RouteContext, RouteContextType } from '@ant-design/pro-components';

const Page = () => (
  <RouteContext.Consumer>
    {(value: RouteContextType) => {
      return 123
    }}
  </RouteContext.Consumer>
);
export default Page;
