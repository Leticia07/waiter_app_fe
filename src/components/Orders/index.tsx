import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Array<Order> = [
  {
    '_id': '63794ee05fdbf27d6d492792',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668893303645-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '63794ee05fdbf27d6d492793'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668893885604-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '63794ee05fdbf27d6d492794'
      }
    ],
  },
  {
    '_id': '637952bde8368b891e41998d',
    'table': '3',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668893885604-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '637952bde8368b891e41998e'
      }
    ],
  }
];

export function Orders() {
  return(
    <Container>
      <OrdersBoard
        icon="⏱️"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
