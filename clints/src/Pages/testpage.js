import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io();

function App() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        console.log(document.cookie.indexOf("notification=true") === -1);
        socket.on('notification', (message) => {
            // Handle the data from the notification
            showNotification(message)
        });


        socket.on('newOrder', order => {
            console.log('New order received:', order);

            setOrders(prevOrders => [...prevOrders, order]);

            // Display a notification
            const notification = new Notification('New Order Received', {
                body: `Order #${order.id}: ${order.item} x ${order.quantity}`,
            });
        });

        return () => {
            socket.disconnect();
        };
    }, []);



    const [notification, setNotification] = useState(null);

    function handleNotificationClick() {
        console.log('Notification clicked!');
    }

    function showNotification(message) {
        console.log(message);
        if (!('Notification' in window)) {
            alert('This browser does not support notifications');
            return;
        }

        if (Notification.permission === 'granted') {
            const notification = new Notification(message.message, {
                body: 'Click me to do something!',
            });
            notification.onclick = handleNotificationClick;
            setNotification(notification);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    showNotification();
                }
            });
        }
    }

    return (
        <div>
            <h1>Orders:</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        Order #{order.id}: {order.item} x {order.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
