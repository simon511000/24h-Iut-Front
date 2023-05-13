import { useEffect, useState } from "react";
import IProposal from "../interfaces/IProposal";
import { getProposals } from "../services/api";
import Loading from "../components/Loading";

import "./ProposalPage.scss";
import Proposal from "../components/Proposal";

export default function ProposalPage() {
  const [proposals, setProposals] = useState<IProposal[] | undefined>();

  useEffect(() => {
    getProposals().then(setProposals);
  }, []);

  return proposals === undefined ? <Loading /> : (
    <div className="proposal_page">
      {proposals.map(proposal => (
        <Proposal key={proposal.id} proposal={proposal} />
      ))}
    </div>
  )
}