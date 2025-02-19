import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AdminDashboardUser } from "@/lib/models/views/UsersAdminDashboard";
import { getPlaceholder } from "@/lib/utils";
import clsx from "clsx";
export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default function UsersTable({ users }: { users: AdminDashboardUser[] }) {
  return (
    <table className="table-auto w-full font-ibm-plex-sans">
      <thead>
        <tr className="text-left font-[100] bg-light-300">
          <th className="font-[200] p-3">USER</th>
          <th className="font-[200] p-3">CREATED AT</th>
          <th className="font-[200] p-3">UPDATED AT</th>
          <th className="font-[200] p-3">ROLE</th>
          <th className="font-[200] p-3">STATUS</th>
          <th className="font-[200] p-3">UNIVERSITY CARD</th>
          <th className="font-[200] p-3">UNIVERSITY ID NUMBER</th>
          <th className="font-[200] p-3">BORROWED BOOKS</th>
          <th className="font-[200] p-3">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {(users || []).map((user) => (
          <tr className="border-b-2" key={user.id}>
            <td className="p-2">
              <div className="flex gap-2 items-center">
                <AvatarDemo />
                <div>
                  <div>{getPlaceholder(user.full_name)}</div>
                  <div className="text-[12px] text-light-500">
                    {getPlaceholder(user.email)}
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div className="font-bold text-light-500">
                {new Date(user.created_at).toISOString()}
              </div>
            </td>
            <td className="p-3">
              <div className="">{new Date(user.updated_at).toISOString()}</div>
            </td>
            <td className="p-3">
              <div className={clsx("badge", user.role)}>
                {getPlaceholder(user.role)}
              </div>
            </td>
            <td className="p-3">
              <div className="">{getPlaceholder(user.status)}</div>
            </td>
            <td className="p-3">
              <div className="">
                {getPlaceholder(user.university_card_image)}
              </div>
            </td>
            <td className="p-3">
              <div className="">
                {getPlaceholder(user.university_id_number)}
              </div>
            </td>
            <td className="p-3">
              <div className="">{getPlaceholder(String(user.borrowed))}</div>
            </td>

            {/* <td>
              <div className="font-bold text-[#0089F1] flex gap-2 items-center cursor-pointer">
                <span>10.12.2133.2</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5835 6.85414C7.47267 6.85414 7.36184 6.81331 7.27434 6.72581C7.10517 6.55664 7.10517 6.27664 7.27434 6.10747L12.0577 1.32414C12.2268 1.15497 12.5068 1.15497 12.676 1.32414C12.8452 1.49331 12.8452 1.77331 12.676 1.94247L7.89267 6.72581C7.80517 6.81331 7.69434 6.85414 7.5835 6.85414Z"
                    fill="#0089F1"
                  />
                  <path
                    d="M12.8332 4.40425C12.594 4.40425 12.3957 4.20591 12.3957 3.96675V1.60425H10.0332C9.79404 1.60425 9.5957 1.40591 9.5957 1.16675C9.5957 0.927581 9.79404 0.729248 10.0332 0.729248H12.8332C13.0724 0.729248 13.2707 0.927581 13.2707 1.16675V3.96675C13.2707 4.20591 13.0724 4.40425 12.8332 4.40425Z"
                    fill="#0089F1"
                  />
                  <path
                    d="M8.75033 13.2709H5.25033C2.08283 13.2709 0.729492 11.9176 0.729492 8.75008V5.25008C0.729492 2.08258 2.08283 0.729248 5.25033 0.729248H6.41699C6.65616 0.729248 6.85449 0.927581 6.85449 1.16675C6.85449 1.40591 6.65616 1.60425 6.41699 1.60425H5.25033C2.56116 1.60425 1.60449 2.56091 1.60449 5.25008V8.75008C1.60449 11.4392 2.56116 12.3959 5.25033 12.3959H8.75033C11.4395 12.3959 12.3962 11.4392 12.3962 8.75008V7.58341C12.3962 7.34425 12.5945 7.14591 12.8337 7.14591C13.0728 7.14591 13.2712 7.34425 13.2712 7.58341V8.75008C13.2712 11.9176 11.9178 13.2709 8.75033 13.2709Z"
                    fill="#0089F1"
                  />
                </svg>
              </div>
            </td> */}
            <td>
              <div className="flex justify-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5001 5.60839C17.4834 5.60839 17.4584 5.60839 17.4334 5.60839C13.0251 5.16673 8.62505 5.00006 4.26672 5.44173L2.56672 5.60839C2.21672 5.64173 1.90839 5.39173 1.87505 5.04173C1.84172 4.69173 2.09172 4.39173 2.43339 4.35839L4.13339 4.19173C8.56672 3.74173 13.0584 3.91673 17.5584 4.35839C17.9001 4.39173 18.1501 4.70006 18.1167 5.04173C18.0917 5.36673 17.8167 5.60839 17.5001 5.60839Z"
                    fill="#EF3A4B"
                  />
                  <path
                    d="M7.08363 4.76675C7.05029 4.76675 7.01696 4.76675 6.97529 4.75842C6.64196 4.70008 6.40863 4.37508 6.46696 4.04175L6.65029 2.95008C6.78363 2.15008 6.96696 1.04175 8.90863 1.04175H11.092C13.042 1.04175 13.2253 2.19175 13.3503 2.95841L13.5336 4.04175C13.592 4.38341 13.3586 4.70842 13.0253 4.75842C12.6836 4.81675 12.3586 4.58342 12.3086 4.25008L12.1253 3.16675C12.0086 2.44175 11.9836 2.30008 11.1003 2.30008H8.91696C8.03363 2.30008 8.01696 2.41675 7.89196 3.15841L7.70029 4.24175C7.65029 4.55008 7.38363 4.76675 7.08363 4.76675Z"
                    fill="#EF3A4B"
                  />
                  <path
                    d="M12.675 18.9584H7.325C4.41666 18.9584 4.3 17.3501 4.20833 16.0501L3.66666 7.6584C3.64166 7.31673 3.90833 7.01673 4.25 6.99173C4.6 6.97506 4.89166 7.2334 4.91666 7.57506L5.45833 15.9667C5.55 17.2334 5.58333 17.7084 7.325 17.7084H12.675C14.425 17.7084 14.4583 17.2334 14.5417 15.9667L15.0833 7.57506C15.1083 7.2334 15.4083 6.97506 15.75 6.99173C16.0917 7.01673 16.3583 7.3084 16.3333 7.6584L15.7917 16.0501C15.7 17.3501 15.5833 18.9584 12.675 18.9584Z"
                    fill="#EF3A4B"
                  />
                  <path
                    d="M11.3834 14.375H8.6084C8.26673 14.375 7.9834 14.0917 7.9834 13.75C7.9834 13.4083 8.26673 13.125 8.6084 13.125H11.3834C11.7251 13.125 12.0084 13.4083 12.0084 13.75C12.0084 14.0917 11.7251 14.375 11.3834 14.375Z"
                    fill="#EF3A4B"
                  />
                  <path
                    d="M12.0837 11.0417H7.91699C7.57533 11.0417 7.29199 10.7584 7.29199 10.4167C7.29199 10.0751 7.57533 9.79175 7.91699 9.79175H12.0837C12.4253 9.79175 12.7087 10.0751 12.7087 10.4167C12.7087 10.7584 12.4253 11.0417 12.0837 11.0417Z"
                    fill="#EF3A4B"
                  />
                </svg>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
