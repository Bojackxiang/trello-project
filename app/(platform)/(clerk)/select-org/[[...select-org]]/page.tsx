import PageContainer from "@/components/container/PageContainer";
import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const SelectOrganizationPage = () => {
  return (
    <PageContainer>
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl={"/organization/:id"}
        afterCreateOrganizationUrl={"/organization/:id"}
      />
    </PageContainer>
  );
};

export default SelectOrganizationPage;
