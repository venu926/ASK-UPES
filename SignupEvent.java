public class SignupEvent {
    public void signup() {
      
        // When a user signs up, trigger a notification
      NotificationEngine engine = new NotificationEngine();
      engine.sendNotification("admin@example.com", "A new user has signed up");
    }
  }
  
  public class TriggerEngine {
    public void start() {
      SignupEvent signupEvent = new SignupEvent();
      
      // Set up an event listener to trigger a notification when a user signs up
      signupEvent.addListener(new EventListener() {
        public void eventTriggered() {
          NotificationEngine engine = new NotificationEngine();
          engine.sendNotification("admin@example.com", "A new user has signed up");
        }
      });
    }
  }
  