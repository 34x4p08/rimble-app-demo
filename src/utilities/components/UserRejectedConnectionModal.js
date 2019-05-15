import React from "react";
import { Card, Heading, Text, Flex, Button, Icon, Modal } from "rimble-ui";

class UserRejectedConnectionModal extends React.Component {
  sendMessageAgain = event => {
    this.props.closeModal();
    this.props.initAccount();
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <Card p={5} maxWidth={"600px"}>
          <Button.Text
            icononly
            icon={"Close"}
            color={"moon-gray"}
            position={"absolute"}
            top={0}
            right={0}
            mt={3}
            mr={3}
            onClick={this.props.closeModal}
          />

          <Flex flexDirection={"column"} justifyContent={"space-between"}>
            <Flex justifyContent={"center"} my={4}>
              <Icon name="Warning" color="gold" size="40" />
            </Flex>

            <Heading.h2 my={3}>
              You can't continue without connecting your account
            </Heading.h2>

            <Text my={4}>
              To use our blockchain features you need to confirm the connection
              request.
            </Text>

            <Flex justifyContent={"flex-end"} mt={4}>
              <Button.Outline onClick={this.props.closeModal} mr={4}>
                Cancel connection
              </Button.Outline>
              <Button onClick={this.sendMessageAgain}>
                Try again
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Modal>
    );
  }
}

export default UserRejectedConnectionModal;
