import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  var message : Text = "Hello World";

  public query ({ caller }) func getMessage() : async Text {
    message;
  };

  public shared ({ caller }) func setMessage(newMessage : Text) : async () {
    if (newMessage.size() == 0) { Runtime.trap("Cannot update empty message.") };
    message := newMessage;
  };
};
