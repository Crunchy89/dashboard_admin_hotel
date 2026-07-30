import type { ComponentProps } from "react";

type IconProps = ComponentProps<"img">;

const createIcon = (name: string) => {
  const Icon = ({ alt = "", ...props }: IconProps) => (
    <img src={`/icons/${name}.svg`} alt={alt} aria-hidden={alt ? undefined : true} {...props} />
  );

  Icon.displayName = `${name}Icon`;
  return Icon;
};

const PlusIcon = createIcon("plus");
const CloseIcon = createIcon("close");
const BoxIcon = createIcon("box");
const CheckCircleIcon = createIcon("check-circle");
const AlertIcon = createIcon("alert");
const InfoIcon = createIcon("info");
const ErrorIcon = createIcon("info-hexa");
const BoltIcon = createIcon("bolt");
const ArrowUpIcon = createIcon("arrow-up");
const ArrowDownIcon = createIcon("arrow-down");
const FolderIcon = createIcon("folder");
const VideoIcon = createIcon("videos");
const AudioIcon = createIcon("audio");
const GridIcon = createIcon("grid");
const FileIcon = createIcon("file");
const DownloadIcon = createIcon("download");
const ArrowRightIcon = createIcon("arrow-right");
const GroupIcon = createIcon("group");
const BoxIconLine = createIcon("box-line");
const ShootingStarIcon = createIcon("shooting-star");
const DollarLineIcon = createIcon("dollar-line");
const TrashBinIcon = createIcon("trash");
const AngleUpIcon = createIcon("angle-up");
const AngleDownIcon = createIcon("angle-down");
const PencilIcon = createIcon("pencil");
const CheckLineIcon = createIcon("check-line");
const CloseLineIcon = createIcon("close-line");
const ChevronDownIcon = createIcon("chevron-down");
const ChevronUpIcon = createIcon("chevron-up");
const PaperPlaneIcon = createIcon("paper-plane");
const LockIcon = createIcon("lock");
const EnvelopeIcon = createIcon("envelope");
const UserIcon = createIcon("user-line");
const CalenderIcon = createIcon("calender-line");
const EyeIcon = createIcon("eye");
const EyeCloseIcon = createIcon("eye-close");
const TimeIcon = createIcon("time");
const CopyIcon = createIcon("copy");
const ChevronLeftIcon = createIcon("chevron-left");
const UserCircleIcon = createIcon("user-circle");
const TaskIcon = createIcon("task-icon");
const ListIcon = createIcon("list");
const TableIcon = createIcon("table");
const PageIcon = createIcon("page");
const PieChartIcon = createIcon("pie-chart");
const BoxCubeIcon = createIcon("box-cube");
const PlugInIcon = createIcon("plug-in");
const DocsIcon = createIcon("docs");
const MailIcon = createIcon("mail-line");
const HorizontaLDots = createIcon("horizontal-dots");
const ChatIcon = createIcon("chat");
const MoreDotIcon = createIcon("more-dot");
const BellIcon = createIcon("bell");

export {
  DownloadIcon,
  BellIcon,
  MoreDotIcon,
  FileIcon,
  GridIcon,
  AudioIcon,
  VideoIcon,
  BoltIcon,
  PlusIcon,
  BoxIcon,
  CloseIcon,
  CheckCircleIcon,
  AlertIcon,
  InfoIcon,
  ErrorIcon,
  ArrowUpIcon,
  FolderIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  GroupIcon,
  BoxIconLine,
  ShootingStarIcon,
  DollarLineIcon,
  TrashBinIcon,
  AngleUpIcon,
  AngleDownIcon,
  PencilIcon,
  CheckLineIcon,
  CloseLineIcon,
  ChevronDownIcon,
  PaperPlaneIcon,
  EnvelopeIcon,
  LockIcon,
  UserIcon,
  CalenderIcon,
  EyeIcon,
  EyeCloseIcon,
  TimeIcon,
  CopyIcon,
  ChevronLeftIcon,
  UserCircleIcon,
  ListIcon,
  TableIcon,
  PageIcon,
  TaskIcon,
  PieChartIcon,
  BoxCubeIcon,
  PlugInIcon,
  DocsIcon,
  MailIcon,
  HorizontaLDots,
  ChevronUpIcon,
  ChatIcon,
};
