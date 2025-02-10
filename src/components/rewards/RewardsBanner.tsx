export default function RewardsBanner() {
  return (
    <div className="bg-white py-3 sm:py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xl sm:text-2xl">⭐</span>
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-1">Join VivaBucks Rewards</h2>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span>💰 $5 Welcome Bonus</span>
                <span>+</span>
                <span>🎁 100 VivaBucks</span>
              </div>
            </div>
          </div>
          <button className="w-full sm:w-auto bg-[#FF9B54] text-white px-4 sm:px-6 py-2 rounded text-center hover:bg-[#ff8c3b] transition-colors">
            Join Now →
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-600 border-t pt-2 gap-2 sm:gap-0">
          <div>🎁 100 VivaBucks = $1 Reward 💰</div>
          <div>⭐ Earn 1 VivaBuck per $1 spent</div>
        </div>
      </div>
    </div>
  )
} 