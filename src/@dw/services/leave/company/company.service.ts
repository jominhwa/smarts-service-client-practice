import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // 회사 목록 가져오기
  getCompanyList() {
    return this.http.get(this.baseUrl + '/super-admin/getCompanyList');
  }

  // 회사 추가
  addCompany(companyData: any) {
    return this.http.post(
      this.baseUrl + '/super-admin/addCompany',
      companyData
    );
  }

  // 수정할 회사 정보
  getCompanyInfo(companyId: any) {
    return this.http.get(this.baseUrl + '/super-admin/getCompanyInfo/', {
      params: companyId,
    });
  }

  editCompany(companyData: any) {
    return this.http.patch(
      this.baseUrl + '/super-admin/editCompany',
      companyData
    );
  }

  deleteCompany(companyId: any) {
    return this.http.delete(this.baseUrl + '/super-admin/deleteCompany', {
      params: companyId,
    });
  }
}
