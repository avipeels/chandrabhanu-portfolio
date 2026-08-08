import type { Metadata } from 'next';
import MovieTicketBookingPage from '../../components/MovieTicketBookingPage';

export const metadata: Metadata = {
  title: 'Movie Ticket Booking App | Chandra Bhanu',
  description: 'A Google UX Design Professional Certificate case study for a movie ticket booking app.',
};

export default function MovieTicketBookingRoute() {
  return <MovieTicketBookingPage />;
}
