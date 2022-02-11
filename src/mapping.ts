import {
  TokenIFPSUpdatedPath as TokenIFPSUpdatedPathEvent,
  Transfer as TransferEvent,
  Token as TokenContract
} from "../generated/Token/Token"
import { Token,User } from "../generated/schema"


export function handleTokenIPFSPathUpdated(event: TokenIPFSPathUpdated): void {}

export function handleTransfer(event: Transfer): void {}
