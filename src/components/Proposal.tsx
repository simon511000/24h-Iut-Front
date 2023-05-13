import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)
import IProposal from "../interfaces/IProposal"

import "./Proposal.scss";

export type PropoalProps = {
  proposal: IProposal;
}

export default function Proposal({ proposal }: PropoalProps) {
  return <div className="proposal">
    <div className="proposal__header">
      <div className="proposal__header__title">
        {proposal.title}
      </div>
      <div className="proposal__header__end_at">
        {dayjs().to(proposal.endAt)}
      </div>
    </div>
    <div className="proposal__description">
      {proposal.description}
    </div>
    <div className="proposal__footer">
      <progress className="proposal__footer__progress" max="100" value={proposal.approvePercent}></progress>
      <div className="proposal__footer__buttons">
        <button type="button" className="proposal__footer__buttons__button proposal__footer__buttons__button--agree">
          Pour
        </button>
        <button type="button" className="proposal__footer__buttons__button proposal__footer__buttons__button--disagree">
          Contre
        </button>
      </div>
    </div>
  </div>
}