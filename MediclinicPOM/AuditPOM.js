class AuditPage {
    constructor(page) {
        this.page = page;


        this.auditinspection = page.locator('.sidebar-link.d-flex.align-items-center.gap-2.collapsed');
        this.corporateaudit = page.locator('a[href="/AuditInspectionCorporate/CorporateAuditPlan"]'); 
        this.addaudit = page.locator('button.btn.btn-info'); 


    }


    async auditandinspection(){

        await this.auditandinspection.click();
        
}

    async CorporateAudit(){

        await this.corporateaudit.click();
    }

    async AddCAP(){
        await this.addaudit.click();
    }
}

