import { ERC20Token } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'

export const paxeerTokens = {
  usdc: new ERC20Token(
    ChainId.PAXEER,
    '0x29e1f94f6b209b57ecdc1fe87448a6d085a78a5a',
    6,
    'USDC',
    'USD Coin',
  ),
  wpax: new ERC20Token(
    ChainId.PAXEER,
    '0x17D6592A6B27564F3D0810D79405D366a4aC69e5',
    18,
    'WPAX',
    'Wrapped PAX',
  ),
  usdt: new ERC20Token(
    ChainId.PAXEER,
    '0x2a401fe7616c4aba69b147b4b725ce48ca7ec660',
    6,
    'USDT',
    'Tether USD',
  ),
  sol: new ERC20Token(
    ChainId.PAXEER,
    '0x7100cf39ff0e845d7751fb56198b8dd16c6ecb2a',
    18,
    'SOL',
    'Solana',
  ),
  uni: new ERC20Token(
    ChainId.PAXEER,
    '0x90a271d104aea929b68867b3050efacbc1a28e84',
    18,
    'UNI',
    'Uniswap',
  ),
  wbtc: new ERC20Token(
    ChainId.PAXEER,
    '0x96465d06640aff1a00888d4b9217c9eae708c419',
    8,
    'WBTC',
    'Wrapped BTC',
  ),
  ton: new ERC20Token(
    ChainId.PAXEER,
    '0x9d60b394276e67a44f2d80e1ab7cfafa4e151f02',
    18,
    'TON',
    'Toncoin',
  ),
  cro: new ERC20Token(
    ChainId.PAXEER,
    '0xa1956408cbeb4c0d2c257be394b9bdf4c9e1a061',
    18,
    'CRO',
    'Cronos',
  ),
  bnb: new ERC20Token(
    ChainId.PAXEER,
    '0xbbf11b964ac48bd11109b68dffe129b45671e34e',
    18,
    'BNB',
    'Binance Coin',
  ),
  weth: new ERC20Token(
    ChainId.PAXEER,
    '0xd0c1a714c46c364dbdd4e0f7b0b6ba5354460da7',
    18,
    'WETH',
    'Wrapped ETH',
  ),
  dot: new ERC20Token(
    ChainId.PAXEER,
    '0xdccec2b62dd102276b7ba689405a5cd7504a8cd3',
    18,
    'DOT',
    'Polkadot',
  ),
  wsteth: new ERC20Token(
    ChainId.PAXEER,
    '0xeb2c4ae6fe90f9bf25c94269236cb5408e00e188',
    18,
    'wstETH',
    'Wrapped stETH',
  ),
  // Flack deployed contracts
  flackToken: new ERC20Token(
    ChainId.PAXEER,
    '0xD49A33bCaeD060e0d0aA627Eed620A26ECF6175E',
    18,
    'FLACK',
    'FlackToken',
  ),
  xFlackToken: new ERC20Token(
    ChainId.PAXEER,
    '0xe531f6b32f58e4143117B2796aBe42B85082DDE3',
    18,
    'XFLACK',
    'XFlackToken',
  ),
}
