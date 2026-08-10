import type { Metadata } from 'next';
import MovieTicketBookingPage from '../../components/MovieTicketBookingPage';
import { createPageMetadata } from '../../seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Movie Ticket Booking App | Chandra Bhanu',
  description: 'A Google UX Design Professional Certificate case study for a movie ticket booking app.',
  path: '/work/movie-ticket-booking-app',
  image: '/images/board-game-29108c.png',
});

export default function MovieTicketBookingRoute() {
  return <MovieTicketBookingPage />;
}
