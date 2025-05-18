import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StarRating({ rating }) {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating / 2 - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div style={{ color: '#f5c518', display: 'flex', gap: '4px' }}>
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} />
            ))}
            {hasHalfStar && <FaStarHalfAlt />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} />
            ))}
        </div>
    );
}