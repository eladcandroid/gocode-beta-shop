import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const About = () => {
  return (
    <div>
      <Tabs defaultActiveKey="2" onChange={callback}>
        <TabPane tab="About our company" key="1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          placeat officia laborum itaque reiciendis possimus iste beatae fugiat
          deleniti modi aperiam quos voluptatum, provident quia. Fugiat earum
          laudantium molestiae qui!
        </TabPane>
        <TabPane tab="Contact Us" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
};

export default About;
