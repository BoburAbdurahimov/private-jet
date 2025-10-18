// Simple admin authentication system
export interface AdminUser {
  id: string;
  username: string;
  isAuthenticated: boolean;
}

const ADMIN_CREDENTIALS = {
  username: 'Airport',
  password: 'Boburjon123#' // In production, this should be more secure
};

export class AdminAuth {
  private static STORAGE_KEY = 'jetset_admin_auth';

  static login(username: string, password: string): boolean {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const adminUser: AdminUser = {
        id: 'admin',
        username: 'admin',
        isAuthenticated: true
      };
      
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(adminUser));
      }
      return true;
    }
    return false;
  }

  static logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  static getCurrentUser(): AdminUser | null {
    if (typeof window === 'undefined') return null;
    
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        const user = JSON.parse(stored);
        return user.isAuthenticated ? user : null;
      } catch {
        return null;
      }
    }
    return null;
  }

  static isAuthenticated(): boolean {
    const user = this.getCurrentUser();
    return user?.isAuthenticated || false;
  }
}
