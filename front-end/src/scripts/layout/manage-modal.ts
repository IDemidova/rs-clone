import ManagePage from './manage-page';

class ManageModal {
  public static openModal(modalToOpen: HTMLElement): void {
    const page = ManagePage.getPage();

    page.classList.add('not-scrollable');
    page.append(modalToOpen);
  }

  public static closeModal(modalToClose: HTMLElement): void {
    const page = ManagePage.getPage();

    page.classList.remove('not-scrollable');
    modalToClose.remove();
  }

  public static changeModal(
    modalWrapper: HTMLElement,
    modalToClose: HTMLElement,
    modalToOpen: HTMLElement
  ): void {
    modalToClose.remove();
    modalWrapper.append(modalToOpen);
  }

  public static switchModal(modalToHide: HTMLElement): void {
    modalToHide.classList.add('hidden');

    if (modalToHide.previousElementSibling) {
      modalToHide.previousElementSibling.classList.remove('hidden');
    }

    if (modalToHide.nextElementSibling) {
      modalToHide.nextElementSibling.classList.remove('hidden');
    }
  }
}

export default ManageModal;
