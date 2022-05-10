type Events<T> = keyof T;

type Unsubscriber = () => void;

type Callback = (...args: any[]) => any;

type SubscribersEvents<T> = { [P in keyof T]: Callback[] };

class PubSub<T extends Record<string, string> = any> {
  subscribers: SubscribersEvents<T>;

  constructor(events: T) {
    this.subscribers = this.getSubscribers(events);
  }

  private getSubscribers(events: T): SubscribersEvents<T> {
    return Object.fromEntries(
      Object.entries(events).map(([key, value]) => [key, []])
    ) as unknown as SubscribersEvents<T>;
  }

  subscribe(event: Events<T>, callback: Callback): Unsubscriber {
    const subscribers = this.subscribers[event];

    subscribers.push(callback);

    return () => this.unsubscribe(event, callback);
  }

  publish(event: Events<T>, ...args: any[]): void {
    const subscribers = this.subscribers[event];

    subscribers.forEach((subscriber) => subscriber(...args));
  }

  unsubscribe(event: Events<T>, callback: Callback): void {
    const subscribers = this.subscribers[event];

    subscribers.splice(subscribers.indexOf(callback), 1);
  }
}

export default PubSub;
