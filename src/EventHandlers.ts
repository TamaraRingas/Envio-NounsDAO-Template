/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */

import {
  ERC721Contract_CapacityIncreased_loader,
  ERC721Contract_CapacityIncreased_handler,
  ERC721Contract_Transfer_loader,
  ERC721Contract_Transfer_handler,
  NounsAuctionContractContract_CreatedBid_loader,
  NounsAuctionContractContract_CreatedBid_handler,
  NounsAuctionContractContract_SettledAndCreatedAuction_loader,
  NounsAuctionContractContract_SettledAndCreatedAuction_handler,
  NounsAuctionContractContract_WithdrawMoney_loader,
  NounsAuctionContractContract_WithdrawMoney_handler,
} from "../generated/src/Handlers.gen";

import {
  createdBidEntity,
  settledAndCreatedAuctionEntity,
  withdrawMoneyEntity,
  sumBidAmountEntity,
  totalWinAmountEntity,
  tokenEntity,
  accountEntity,
  transferEntity,
  
} from "../generated/src/Types.gen";

// import {
//   MyAwesomeContractContract_AwesomeEvent_loader,
//   MyAwesomeContractContract_AwesomeEvent_handler,
// } from "../generated/src/Handlers.gen";

// import { awesomeEntityEntity } from "../generated/src/Types.gen";

// MyAwesomeContractContract_AwesomeEvent_loader(({ event, context }) => {
//   context.AwesomeEntity.load(event.params.identifier);
// });

// MyAwesomeContractContract_AwesomeEvent_handler(({ event, context }) => {
//   let awesomeEventObject = context.AwesomeEntity.get(event.params.identifier);
//   if (!!awesomeEventObject) {
//     const updatedEntity = {
//       id: awesomeEventObject.id,
//       awesomeAddress: event.params.awesomeAddress,
//       awesomeTotal: event.params.awesomeValue + awesomeEventObject.awesomeTotal,
//     };
//     context.AwesomeEntity.set(updatedEntity);
//   } else {
//     const awesomeEntityObject = {
//       id: event.params.identifier,
//       awesomeAddress: event.params.awesomeAddress,
//       awesomeTotal: event.params.awesomeValue,
//     };
//     context.AwesomeEntity.set(awesomeEntityObject);
//   }
// });
