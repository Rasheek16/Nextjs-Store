import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';

import FavoriteToggleForm from './FavouriteToggleForm';
import { fetchFavoriteId } from '@/app/utils/action';
async function FavoriteToggleButton({ productId }: { productId: string }) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButton;